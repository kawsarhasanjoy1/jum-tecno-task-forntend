import React from 'react';
import { Button, Table } from 'react-bootstrap';

type MoodEntry = {
  _id: string;
  mood: string;
  note?: string;
  date: string;
  deleted: boolean;
};

type Props = {
  moods: MoodEntry[];
  onDelete: (id: string) => void;
  onRestore: (id: string) => void;
};

const MoodTable: React.FC<Props> = ({ moods, onDelete, onRestore }) => {
  return (
    <Table striped bordered hover responsive className="mt-4">
      <thead>
        <tr>
          <th>Date</th>
          <th>Mood</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {moods.map((entry) => (
          <tr key={entry._id} className={entry.deleted ? 'table-danger' : ''}>
            <td>{new Date(entry.date).toLocaleDateString()}</td>
            <td>{entry.mood}</td>
            <td>{entry.note || '-'}</td>
            <td>
              {entry.deleted ? (
                <Button size="sm" variant="success" onClick={() => onRestore(entry._id)}>
                  Restore
                </Button>
              ) : (
                <Button size="sm" variant="danger" onClick={() => onDelete(entry._id)}>
                  Soft Delete
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MoodTable;
