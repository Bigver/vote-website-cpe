import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./loading.css";

function App() {
  const data =
    "https://script.googleusercontent.com/macros/echo?user_content_key=xP4ESAvQ5qDOgQzIsg_FWpJfXk4wHzR6NfeVylpxWfQa6HYtKSxG-_KHQ87OAKoJpKn-pauPEnkuVtHBTrfxatDKSrYwLIM-m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOtXwyGeP1caoEgmVLUlfaj5wK6niex_RXNNrJurhkI9cQLIscClXHPzL_wEbwPw-yKog2oIHYXrs571nGUUabrY7fSlMCV_Rtz9Jw9Md8uu&lib=Mzr44tg565xAFrdBAKnNDkWDRu-MpyHbQ";
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${data}`);
        const sortedData = res.data.sort((a, b) => b.score - a.score); // Sort by score in descending order
        setContent(sortedData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="page-leaderboard">
        <section className="ranking">
          <div className="contain">
            {loading ? (
              <div className="loading">
                <span class="back">
                  <span>L</span>
                  <span>o</span>
                  <span>a</span>
                  <span>d</span>
                  <span>i</span>
                  <span>n</span>
                  <span>g</span>
                </span>
              </div>
            ) : (
              <div className="ranking-table">
                <div className="ranking-table-header-row">
                  <div className="ranking-table-header-data h6">Rank</div>
                  <div className="ranking-table-header-data h6">image</div>
                  <div className="ranking-table-header-data h6">vote</div>
                </div>
                <div
                  className="ranking-table-row-leader-1"
                  style={{ minHeight: "240px" }}
                >
                  <div className="ranking-table-data-leader-1">
                    <div className="medal-gold"></div>
                  </div>
                  <div className="ranking-table-data">
                    <img src={content[0].img} alt="" />
                  </div>
                  <div className="ranking-table-data">
                    <h1>{content[0].score}</h1>
                  </div>
                </div>
                <div
                  className="ranking-table-row-leader-2"
                  style={{ minHeight: "250px" }}
                >
                  <div className="ranking-table-data-leader-2">
                    <div className="medal-silver"></div>
                  </div>
                  <div className="ranking-table-data">
                    <img src={content[1].img} alt="" />
                  </div>
                  <div className="ranking-table-data">
                    <h1>{content[1].score}</h1>
                  </div>
                </div>
                <div
                  className="ranking-table-row-leader-3"
                  style={{ minHeight: "250px" }}
                >
                  <div className="ranking-table-data-leader-3">
                    <div className="medal-bronze"></div>
                  </div>
                  <div className="ranking-table-data">
                    <img src={content[2].img} alt="" />
                  </div>
                  <div className="ranking-table-data">
                    <h1>{content[2].score}</h1>
                  </div>
                </div>
                {content.slice(3).map((item, index) => (
                  <div
                    className="ranking-table-body"
                    style={{ minHeight: "250px" }}
                  >
                    <div
                      className="ranking-table-row"
                      style={{ minHeight: "250px" }}
                    >
                      <div className="ranking-table-data">{index + 4}</div>
                      <div className="ranking-table-data">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="ranking-table-data">
                        <h1>{item.score}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
