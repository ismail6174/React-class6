import Table from 'react-bootstrap/Table';

const Tables = (recorddata)=> {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
       {
        recorddata.map((e,i)=>{
            return(
                <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.pass}</td>
                    <td>{e.city}</td>
                </tr>
            )
        })
       }
      </tbody>
    </Table>
  );
}

export default Tables;