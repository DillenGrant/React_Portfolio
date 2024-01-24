import React from 'react';

import WorkDayScheduler from "../../assets/images/main-page.jpg";
import WeatherDashboard from "../../assets/images/main.jpg";
import PlaceHolderThree from "../../assets/images/placeholder_3_600.jpg";
import ReelRoulette from "../../assets/images/Reel-Roulette.png";
import PasswordGenerator from "../../assets/images/generated password.png";
import DishDiscovery from "../../assets/images/288938028-d1f1fd2d-e8c1-404d-9cf1-6b30b4314222.png";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={ReelRoulette}
              alt="Reel Roulette"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/Krich2022/reel-roulette/" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://krich2022.github.io/reel-roulette/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={PasswordGenerator}
              alt="Password Generator"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={DishDiscovery}
              alt="Dish Discovery"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/tavargas9/DishDiscovery" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://secure-hollows-55574-70e0c84bc001.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={WorkDayScheduler}
              alt="work day scheduler"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/DillenGrant" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/DillenGrant" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={WeatherDashboard}
              alt="Weather Dashboard"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/DillenGrant" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/DillenGrant" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderThree}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/kara-krzystan" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/kara-krzystan" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;
