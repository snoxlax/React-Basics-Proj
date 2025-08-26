export function AnimalList({ animalinfos }) {
  return (
    <section className="rare-animals">
      <h2>Animals</h2>
      <table>
        <thead>
          <tr>
            <td colSpan={3}>{'Rare Animals'}</td>
          </tr>
        </thead>
        <tbody>
          {animalinfos.map((animal) => (
            <tr key={animal.type}>
              <td>{animal.type}</td>
              <td>{animal.count}</td>
              <td>
                <a href={`https://www.google.com/search?q=${animal.type}`}>
                  Search
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
