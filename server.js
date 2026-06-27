import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cognizant-careers';

app.use(cors());
app.use(express.json());

const applicantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    skills: { type: String, required: true },
    experience: { type: String, required: true }
  },
  { timestamps: true }
);

const Applicant = mongoose.model('Applicant', applicantSchema);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Cognizant recruitment API is running' });
});

app.post('/api/apply', async (req, res) => {
  try {
    const { name, email, role, skills, experience } = req.body;

    if (!name || !email || !role || !skills || !experience) {
      return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
    }

    const applicant = await Applicant.create({ name, email, role, skills, experience });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully.',
      applicant
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Unable to save application.', error: error.message });
  }
});

mongoose
  .connect(MONGO_URI, {
    serverSelectionTimeoutMS: 5000
  })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  });
