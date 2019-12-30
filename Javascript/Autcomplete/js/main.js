const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search the provinces.json and filter
const searchProvinces = async searchText => {
  const res = await fetch("../data/provinces.json");
  const provinces = await res.json();

  // Get matches to current text input
  let matches = provinces.filter(province => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return province.name.match(regex) || province.short.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = [];
  }
  outputHtml(matches);
};

//Show results in HTML

const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
      <div class="card card-body">
        <table>
          <tr>
            <th>
              <h4><a href=${match.link}>${match.name}</a> (${match.short}) <span class="text-primary">${match.capital}</span></h4>
              <small>Lat: ${match.latitude} / Long: ${match.longitude}</small>
            </th>
            <th>
              <img src="${match.flag}"
              style="width:80px; height:80px; border-radius: 50%;"
              alt="photo of Will Bontrager"
              title="Photo of Will Bontrager" />
            </th>
          </tr>
        </table>
      </div>
    `
      )
      .join("");
    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchProvinces(search.value));
