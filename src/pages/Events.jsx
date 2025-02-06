// import React from 'react';
import '../styles/Events.css'
//import event1 from '../assets/img/pngwing.com.png'

const Events = () => {
  return (
    <section className="events" id="events">
      <div className="title">
        <h2>Our activities</h2>
        <p>
          check out our daily happenings and future works and leave us comment
          under contact section
        </p>
      </div>
      <div className="events-container">
        <div className="past">
          <center>
            <p>past events</p>
          </center>
          <table
            cellSpacing="5"
            cellPadding="1"
            border="5"
            style={{ backgroundColor: "cornflowerblue" }}
          >
            <thead>
              <tr>
                <th></th>
                <th>Event</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src= '' alt="" />
                </td>
                <td>Masaai mara visit</td>
                <td>
                  We visited the pack and planted a tree there to represent kyu
                  unesco visit, we also treated some small animal siblings and
                  collected some useful data to be used for future research.
                </td>
                <td>
                  20<sup>th</sup> june 2022
                </td>
              </tr>
              <tr>
                <td>
                  <img src="images/d.jpeg" alt="" />
                </td>
                <td>Community Clean-Up</td>
                <td>
                  We organized a community clean-up event to promote
                  environmental awareness and responsibility among the local
                  residents.
                </td>
                <td>
                  15<sup>th</sup> August 2022
                </td>
              </tr>
              <tr>
                <td>
                  <img src="images/e.jpeg" alt="" />
                </td>
                <td>Wildlife Conservation Workshop</td>
                <td>
                  A workshop focused on wildlife conservation techniques and the
                  importance of preserving natural habitats.
                </td>
                <td>
                  10<sup>th</sup> December 2022
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="upcoming">
          <center>
            <p>Upcoming events</p>
          </center>
          <table
            cellSpacing="5"
            cellPadding="1"
            border="5"
            style={{ backgroundColor: "cornflowerblue" }}
          >
            <thead>
              <tr>
                <th></th>
                <th>Event</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="images/c.jpeg" alt="" />
                </td>
                <td>Umoja Childrens Home visit</td>
                <td>
                  We visited the pack and planted a tree there to represent kyu
                  unesco visit, we also treated some small animal siblings and
                  collected some useful data to be used for future research.
                </td>
                <td>
                  18<sup>th</sup> September 2024
                </td>
              </tr>
              {/* Repeat for other events */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Events;
