import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

interface Mood {
  _id: string;
  mood: string;
  note?: string;
  date: string;
  deleted: boolean;
  deletedAt?: string | null;
}

const MoodHistory = () => {
  const [moods, setMoods] = useState<Mood[]>([]);
  const [loading, setLoading] = useState(false);
  console.log(moods);
  const fetchMoods = async () => {
    setLoading(true);
    const res = await axiosInstance.get("/moods");
    setMoods(res.data);
    setLoading(false);
  };

  const handleSoftDelete = async (id: string) => {
    await axiosInstance.delete(`/moods/moods/${id}`);
    fetchMoods();
  };

  const handleRestore = async (id: string) => {
    await axiosInstance.patch(`/moods/moods/${id}/restore`);
    fetchMoods();
  };

  useEffect(() => {
    fetchMoods();
  }, []);

  return (
    <div className="container mt-5">
      <h4 className="mb-4 text-center text-primary">Mood History</h4>
      {loading ? (
        <p>Loading...</p>
      ) : moods.length === 0 ? (
        <p className="text-muted text-center">No mood entries found.</p>
      ) : (
        <table className="table table-bordered table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Mood</th>
              <th>Note</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {moods?.map((mood, index) => (
              <tr key={mood._id}>
                <td>{index + 1}</td>
                <td>{mood.mood}</td>
                <td>{mood.note || "—"}</td>
                <td>{new Date(mood.date).toLocaleDateString()}</td>
                <td>
                  {mood.deleted ? (
                    <span className="badge bg-danger">Deleted</span>
                  ) : (
                    <span className="badge bg-success">Active</span>
                  )}
                </td>
                <td>
                  {!mood.deleted ? (
                    <button
                      onClick={() => handleSoftDelete(mood._id)}
                      className="btn btn-sm btn-warning"
                    >
                      Soft Delete
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRestore(mood._id)}
                      className="btn btn-sm btn-info"
                    >
                      Restore
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoodHistory;
