const DataSource = (onSuccess, onFailed) => {
  this.onSuccess = onSuccess;
  this.onFailed = onFailed;
};

DataSource.prototype.searchClub = (keyword) => {
  const filteredClubs = clubs.filter((club) =>
    club.name.toUpperCase().includes(keyword.toUpperCase())
  );

  if (filteredClubs.length) {
    this.onSuccess(filteredClubs);
  } else {
    this.onFailed(`${keyword} is not found`);
  }
};
