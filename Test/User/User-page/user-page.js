function updateReport() {
  const people = JSON.parse(localStorage.getItem("people")) || [];
  const totalPeople = people.length;
  let totalIncome = 0,
    totalExpense = 0,
    totalBalance = 0;

  people.forEach((person) => {
    totalIncome += person.income;
    totalExpense += person.expense;
    totalBalance += person.balance;
  });

  document.getElementById("totalPeople").innerText = totalPeople;
  document.getElementById("totalIncome").innerText = totalIncome.toFixed(2);
  document.getElementById("totalExpense").innerText = totalExpense.toFixed(2);
  document.getElementById("totalBalance").innerText = totalBalance.toFixed(2);
}
function updateCompanyReport() {
  const companies = JSON.parse(localStorage.getItem("companies")) || [];
  document.getElementById("totalCompanies").innerText = companies.length;
  const companyList = document.getElementById("companyList");
  companyList.innerHTML = "";
  companies.forEach((company) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${company.owner} - ${company.company}`;
    companyList.appendChild(listItem);
  });
}

function printReport() {
  window.print();
}
function initialize() {
  updateReport();
  updateCompanyReport();
}

window.onload = initialize;
