

const AddGamePage: React.FC = () => {
  return (
    <div>
      <h1>Add New Game</h1>
      <form>
        <label>
          Game Name:
          <input type="text" name="gameName" />
        </label>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default AddGamePage;