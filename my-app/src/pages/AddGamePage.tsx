import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { API_URL } from "../api";

const AddGamePage = () => {

  

  const [form, setForm] = useState({
  title: "",
  platform: "",
  status: "want",
  rating: "",
  coverUrl: "",
  notes: "",
})

const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: value,
    
  });
};



const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const newGame = {
    ...form,
    rating: form.rating === "" ? null : Number(form.rating),
    coverUrl: form.coverUrl || null,
    notes: form.notes || null,
  };

  try {
    const response = await fetch(`${API_URL}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    });

    if (!response.ok) {
      throw new Error("Failed to add game");
    }

    console.log("Game added successfully!");

  } catch (error) {
    console.error("Error adding game:", error);
  }
};

  return (
    <div>
      <h1>Add New Game</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" required value={form.title} onChange={handleChange} />
        </label>
          <label>
            Platform:
            <input type="text" name="platform" required value={form.platform} onChange={handleChange} />
          </label>
          <label>
            Status:
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="want">Want to Play</option>
              <option value="playing">Playing</option>
              <option value="completed">Completed</option>
              <option value="dropped">Dropped</option>
            </select>
          </label>
          <label>
          Rating:
          <input type="number" min="0" max="5" name="rating" value={form.rating} onChange={handleChange} />
        </label>
        <label>
          Cover URL:
          <input type="url" name="coverUrl" value={form.coverUrl} onChange={handleChange} />
        </label>
        <label>
          Notes:
          <textarea name="notes" value={form.notes} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default AddGamePage;