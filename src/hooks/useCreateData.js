function createData(firstName, lastName, email, role, date) {
  return { firstName, lastName, email, role, date };
}

export function useCreateData(data) {
  var rows = [];
  if (data) {
    data.map((dt) => {
      return rows.push(
        createData(dt.firstName, dt.lastName, dt.email, dt.role, dt.date)
      );
    });
  }
  return rows;
}
