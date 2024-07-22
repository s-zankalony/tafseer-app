import { getId } from '../assets/functions';

const DisplayLinks = ({ links }) => {
  return (
    <>
      <div className="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">سورة</th>
              <th scope="col">الآيات</th>
            </tr>
          </thead>
          <tbody>
            {links.slice(0, 9).map((link, index) => {
              return (
                <tr>
                  <th scope="row">{link.id}</th>
                  <td>{link.sura}</td>
                  <td>
                    <a href={link.url}>{link.verse}</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default DisplayLinks;
