import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchAllUser } from "../services/UserService";
import ReactPaginate from "react-paginate";

// {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'}

const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUser, setTotalUser] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    // Call API here
    getUsers(1);
  }, []);

  const getUsers = async (page) => {
    let res = await fetchAllUser(page);
    console.log(">>> check new res: ", res);
    if (res && res.data && res.total_pages) {
      setListUsers(res.data);
      setTotalPage(res.total_pages);
      setTotalUser(res.total);
    }
  };

  const handlePageClick = (event) => {
    getUsers(event.selected + 1);
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <p>Total User: {totalUser}</p>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< Previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
export default TableUsers;
