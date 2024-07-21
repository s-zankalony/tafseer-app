import './App.css';
import links from './assets/links';

function App() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>مسلسل</th>
            <th>السورة</th>
            <th>الآيات</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link, index) => {
            return (
              <tr key={index}>
                <td>{link.id}</td>
                <td>{link.sura}</td>
                <td>
                  <a href={link.url}>{link.verse}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
