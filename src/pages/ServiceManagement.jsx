import React, { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch
} from "react-icons/fa";

import "../styles/ServiceManagement.css";

function ServiceManagement() {

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Plumbing",
      description: "Water Pipe & Tap Repair",
      status: "Active"
    },
    {
      id: 2,
      name: "Electrician",
      description: "Electrical Installation & Repair",
      status: "Active"
    },
    {
      id: 3,
      name: "Painting",
      description: "House & Office Painting",
      status: "Active"
    }
  ]);

  const [search, setSearch] = useState("");

  const [showAddPopup, setShowAddPopup] =
    useState(false);

  const [showEditPopup, setShowEditPopup] =
    useState(false);

  const [showDeletePopup, setShowDeletePopup] =
    useState(false);

  const [selectedService, setSelectedService] =
    useState(null);

  const [serviceName, setServiceName] =
    useState("");

  const [serviceDescription,
    setServiceDescription] =
    useState("");

  function handleAddService() {

    if (
      !serviceName.trim() ||
      !serviceDescription.trim()
    ) {
      return;
    }

    const newService = {
      id: Date.now(),
      name: serviceName,
      description: serviceDescription,
      status: "Active"
    };

    setServices([
      newService,
      ...services
    ]);

    setServiceName("");
    setServiceDescription("");

    setShowAddPopup(false);

  }

  function handleEditOpen(service) {

    setSelectedService(service);

    setServiceName(service.name);

    setServiceDescription(
      service.description
    );

    setShowEditPopup(true);

  }

  function handleUpdateService() {

    setServices(
      services.map((item) => {

        if (
          item.id === selectedService.id
        ) {

          return {
            ...item,
            name: serviceName,
            description:
              serviceDescription
          };

        }

        return item;

      })
    );

    setShowEditPopup(false);

  }

  function handleDeleteOpen(service) {

    setSelectedService(service);

    setShowDeletePopup(true);

  }

  function handleDeleteService() {

    setServices(
      services.filter(
        (item) =>
          item.id !== selectedService.id
      )
    );

    setShowDeletePopup(false);

  }

  const filteredServices =
    services.filter((item) =>
      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div className="service-management">

      {/* TOP */}

      <div className="services-header">

        <div>
          <h1>
            Service Management
          </h1>

          <p>
            Manage all platform services
          </p>
        </div>

        <button
          className="add-service-btn"
          onClick={() =>
            setShowAddPopup(true)
          }
        >
          <FaPlus />
          Add Service
        </button>

      </div>

      {/* SEARCH */}

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Service..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* TABLE */}

      <div className="service-table">

        <div className="table-head">

          <span>Service</span>

          <span>Description</span>

          <span>Status</span>

          <span>Actions</span>

        </div>

        {
          filteredServices.map(
            (service) => (

              <div
                className="table-row"
                key={service.id}
              >

                <span>
                  {service.name}
                </span>

                <span>
                  {service.description}
                </span>

                <span className="active-status">
                  {service.status}
                </span>

                <div className="action-buttons">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEditOpen(
                        service
                      )
                    }
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDeleteOpen(
                        service
                      )
                    }
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            ))
        }

      </div>

      {/* ADD POPUP */}

      {
        showAddPopup && (

          <div className="popup-overlay">

            <div className="popup-box">

              <h2>
                Add Service
              </h2>

              <input
                type="text"
                placeholder="Service Name"
                value={serviceName}
                onChange={(e) =>
                  setServiceName(
                    e.target.value
                  )
                }
              />

              <textarea
                rows="4"
                placeholder="Description"
                value={serviceDescription}
                onChange={(e) =>
                  setServiceDescription(
                    e.target.value
                  )
                }
              />

              <div className="popup-buttons">

                <button
                  onClick={
                    handleAddService
                  }
                >
                  Save
                </button>

                <button
                  className="cancell-btn"
                  onClick={() =>
                    setShowAddPopup(false)
                  }
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        )
      }

      {/* EDIT POPUP */}

      {
        showEditPopup && (

          <div className="popup-overlay">

            <div className="popup-box">

              <h2>
                Edit Service
              </h2>

              <input
                type="text"
                value={serviceName}
                onChange={(e) =>
                  setServiceName(
                    e.target.value
                  )
                }
              />

              <textarea
                rows="4"
                value={serviceDescription}
                onChange={(e) =>
                  setServiceDescription(
                    e.target.value
                  )
                }
              />

              <div className="popup-buttons">

                <button
                  onClick={
                    handleUpdateService
                  }
                >
                  Update
                </button>

                <button
                  className="cancel-btn"
                  onClick={() =>
                    setShowEditPopup(false)
                  }
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        )
      }

      {/* DELETE POPUP */}

      {
        showDeletePopup && (

          <div className="popup-overlay">

            <div className="popup-box delete-popup">

              <h2>
                Delete Service
              </h2>

              <p>
                Are you sure you want
                to delete this service?
              </p>

              <div className="popup-buttons">

                <button
                  className="delete-confirm-btn"
                  onClick={
                    handleDeleteService
                  }
                >
                  Delete
                </button>

                <button
                  className="cancel-btn"
                  onClick={() =>
                    setShowDeletePopup(false)
                  }
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        )
      }

    </div>

  );

}

export default ServiceManagement;