// 7e9753e96a545f62a4db2505c839fe2e
// ddaaf2fd7b84348ac41ba5af50e71aaa

let newsaccordion = document.getElementById("newsaccordion");

let country = "pk";
let apiKey = "ddaaf2fd7b84348ac41ba5af50e71aaa";
let rText;
let articles;

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://gnews.io/api/v4/top-headlines?country=${country}&token=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let newsHtml = "";
    rText = JSON.parse(this.responseText);
    articles = rText.articles;
    articles.forEach((element, index) => {
      newsHtml += `
                  <div class="card">
                    <div class="card-header " id="heading${index}">
                      <h2 class="mb-0">
                        <button
                          class="btn btn-link btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse${index}"
                          aria-expanded="true"
                          aria-controls="collapse${index}"
                        >
                          <b>Breaking News ${index + 1}:</b> ${element.title}
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapse${index}"
                      class="collapse "
                      aria-labelledby="heading${index}"
                      data-parent="#newsaccordion"
                      
                    >
                      <div class="card-body">
                      ${element.description}. <a href="${
        element.url
      }" target="_blank">Read More... </a>
                      </div>
                    </div>
                  </div>
                `;
    });

    newsaccordion.innerHTML = newsHtml;
  } else {
    console.log("error is occoured");
  }
};

xhr.send();
