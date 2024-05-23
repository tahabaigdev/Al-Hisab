const planTable = () => {
  let month = document.querySelector(".price__toggler .month");
  let year = document.querySelector(".price__toggler .year");
  let monthAmount = document.querySelectorAll(
    ".section__2 .plan__container .flex__container .flex__col .top .month"
  );
  let yearAmount = document.querySelectorAll(
    ".section__2 .plan__container .flex__container .flex__col .top .year"
  );

  year.onclick = () => {
    year.classList.add("active");
    month.classList.remove("active");

    monthAmount.forEach((mo) => {
      mo.style.display = "none";
    });
    yearAmount.forEach((yr) => {
      yr.style.display = "block";
    });
  };

  month.onclick = () => {
    year.classList.remove("active");
    month.classList.add("active");

    monthAmount.forEach((mo) => {
      mo.style.display = "block";
    });
    yearAmount.forEach((yr) => {
      yr.style.display = "none";
    });
  };
};
planTable();

// Accordion

const accordionBox = document.querySelectorAll(".accordion__box");

accordionBox.forEach((box) => {
  const topContainer = box.querySelector(
    ".section__5 .flex__container .flex__col:nth-child(2) .accordion__container .accordion__box .top__container"
  );
  const bottomContainer = box.querySelector(
    ".section__5 .flex__container .flex__col:nth-child(2) .accordion__container .accordion__box .bottom__container"
  );

  topContainer.addEventListener("click", () => {
    for (let i = 0; i < accordionBox.length; i++) {
      if (accordionBox[i] != box) {
        accordionBox[i].classList.remove("active");
      } else {
        accordionBox[i].classList.toggle("active");
      }
    }
  });
});

// Country Code Dropwdown

function toggleDropdown() {
  const options = document.getElementById('selectOptions');
  options.style.display = options.style.display === 'none' ? 'block' : 'none';
}

function selectOption(option) {
  const selectedValue = option.innerHTML;
  document.querySelector('.select-trigger').innerHTML= selectedValue;
  document.getElementById('selectOptions').style.display = 'none';
}

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function (event) {
  const dropdown = document.getElementById('customSelect');
  if (!dropdown.contains(event.target)) {
    document.getElementById('selectOptions').style.display = 'none';
  }
});
