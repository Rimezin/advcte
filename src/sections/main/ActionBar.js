import React from "react";

export default function ActionBar(props) {
  const { session } = props;
  return (
    <div
      id="advcte-main-action"
      class={
        "d-flex flex-column flex-shrink-0 p-3 " +
        (session.experience.darkMode
          ? "text-white bg-dark"
          : "text-black bg-light")
      }
      style={{ width: "280px" }}
    >
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="index.html" class="nav-link active" aria-current="page">
            <svg class="bi me-2" width="16" height="16">
              <i class="bi-alarm"></i>
            </svg>
            Home
          </a>
        </li>
        <li>
          <a
            href="index.html"
            class={
              "nav-link" +
              (session.experience.darkMode ? "text-white" : "text-black")
            }
          >
            <svg class="bi me-2" width="16" height="16">
              <i class="bi-alarm"></i>
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="index.html"
            class={
              "nav-link" +
              (session.experience.darkMode ? "text-white" : "text-black")
            }
          >
            <svg class="bi me-2" width="16" height="16">
              <i class="bi-alarm"></i>
            </svg>
            Orders
          </a>
        </li>
        <li>
          <a
            href="index.html"
            class={
              "nav-link" +
              (session.experience.darkMode ? "text-white" : "text-black")
            }
          >
            <svg class="bi me-2" width="16" height="16">
              <i class="bi-alarm"></i>
            </svg>
            Products
          </a>
        </li>
        <li>
          <a
            href="index.html"
            class={
              "nav-link" +
              (session.experience.darkMode ? "text-white" : "text-black")
            }
          >
            <svg class="bi me-2" width="16" height="16">
              <i class="bi-alarm"></i>
            </svg>
            Customers
          </a>
        </li>
      </ul>
    </div>
  );
}
