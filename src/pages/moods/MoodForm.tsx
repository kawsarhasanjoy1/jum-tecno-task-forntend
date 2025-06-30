import React, { useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import { toast } from "react-toastify";

const MoodForm = () => {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      mood,
      note,
    };

    const res = (await axiosInstance.post(
      "/moods/create-mood",
      payload
    )) as any;
    if (res.success) {
      toast.success(res?.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center text-primary">Log Your Mood</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Select Mood</label>
          <select
            className="form-select"
            required
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">-- Choose --</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Angry">Angry</option>
            <option value="Excited">Excited</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Note (optional)</label>
          <textarea
            className="form-control"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write a short note..."
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-semibold">
          Submit Mood
        </button>
      </form>
    </div>
  );
};

export default MoodForm;
