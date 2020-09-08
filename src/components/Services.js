import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Esse dolor sit cupidatat ut exercitation minim veniam deserunt et nisi occaecat elit.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Esse dolor sit cupidatat ut exercitation minim veniam deserunt et nisi occaecat elit.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Esse dolor sit cupidatat ut exercitation minim veniam deserunt et nisi occaecat elit.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Esse dolor sit cupidatat ut exercitation minim veniam deserunt et nisi occaecat elit.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
