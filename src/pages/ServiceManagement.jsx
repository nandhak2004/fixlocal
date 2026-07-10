import React, { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

import "../styles/ServiceManagement.css";

function ServiceManagement() {

  const [services, setServices] = useState([
    {
      id: 1,
      category: "Plumbing",
      icon: "🚰",
      status: "Active"
    },
    {
      id: 2,
      category: "Electrician",
      icon: "⚡",
      status: "Active"
    },
    {
      id: 3,
      category: "Cleaning",
      icon: "🧹",
      status: "Active"
    },
    {
      id: 4,
      category: "AC Repair",
      icon: "❄️",
      status: "Active"
    },
    {
      id: 5,
      category: "Painting",
      icon: "🎨",
      status: "Active"
    },
    {
      id: 6,
      category: "Carpentry",
      icon: "🪚",
      status: "Active"
    }
  ]);

  const [search, setSearch] = useState("");

  const [showAddPopup, setShowAddPopup] = useState(false);

  const [showEditPopup, setShowEditPopup] = useState(false);

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const [selectedService, setSelectedService] = useState(null);

  const [serviceCategory, setServiceCategory] = useState("");

  const [serviceIcon, setServiceIcon] = useState("");

  const filteredServices = services.filter((item) =>
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddService() {

    if (!serviceCategory.trim() || !serviceIcon.trim()) return;

    const newService = {

      id: Date.now(),

      category: serviceCategory,

      icon: serviceIcon,

      status: "Active"

    };

    setServices([newService, ...services]);

    setServiceCategory("");

    setServiceIcon("");

    setShowAddPopup(false);

  }

  function handleEditOpen(service) {

    setSelectedService(service);

    setServiceCategory(service.category);

    setServiceIcon(service.icon);

    setShowEditPopup(true);

  }

  function handleUpdateService() {

    setServices(

      services.map((item) => {

        if (item.id === selectedService.id) {

          return {

            ...item,

            category: serviceCategory,

            icon: serviceIcon

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

        (item) => item.id !== selectedService.id

      )

    );

    setShowDeletePopup(false);

  }

  function handleStatus(id) {

    setServices(

      services.map((item) => {

        if (item.id === id) {

          return {

            ...item,

            status:

              item.status === "Active"

                ? "Inactive"

                : "Active"

          };

        }

        return item;

      })

    );

  }

  return (

    <div className="sm-management">

      <div className="sm-header">

        <div>

          <h1>Service Management</h1>

          <p>

            Add, Edit and Manage Platform Services

          </p>

        </div>

        <button

          className="sm-add-btn"

          onClick={() => setShowAddPopup(true)}

        >

          <FaPlus />

          Add Service

        </button>

      </div>

      <div className="sm-search-box">

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

      <div className="sm-table">

        <div className="sm-table-head">

          <span>Icon</span>

          <span>Service Name</span>

          <span>Status</span>

          <span>Actions</span>

        </div>

        {filteredServices.map((service) => (

          <div

            className="sm-table-row"

            key={service.id}

          >

            <span className="sm-service-icon">

              {service.icon}

            </span>

            <span>

              {service.category}

            </span>

            <span>

              <button

                className={

                  service.status === "Active"

                    ? "sm-status-active"

                    : "sm-status-inactive"

                }

                onClick={() =>

                  handleStatus(service.id)

                }

              >

                {service.status === "Active"

                  ? <FaCheckCircle />

                  : <FaTimesCircle />}

                {service.status}

              </button>

            </span>

            <div className="sm-actions">

              <button

                className="sm-edit-btn"

                onClick={() =>

                  handleEditOpen(service)

                }

              >

                <FaEdit />

              </button>

              <button

                className="sm-delete-btn"

                onClick={() =>

                  handleDeleteOpen(service)

                }

              >

                <FaTrash />

              </button>

            </div>

          </div>

        ))}
      </div>
            {/* ADD SERVICE POPUP */}

      {showAddPopup && (

        <div className="sm-popup-overlay">

          <div className="sm-popup-box">

            <h2>Add New Service</h2>

            <input
              type="text"
              placeholder="Service Name (Example: Plumbing)"
              value={serviceCategory}
              onChange={(e) =>
                setServiceCategory(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Service Icon (Example: 🚰)"
              value={serviceIcon}
              onChange={(e) =>
                setServiceIcon(e.target.value)
              }
            />

            <div className="sm-popup-buttons">

              <button
                className="sm-save-btn"
                onClick={handleAddService}
              >
                Save
              </button>

              <button
                className="sm-cancel-btn"
                onClick={() =>
                  setShowAddPopup(false)
                }
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

      {/* EDIT POPUP */}

      {showEditPopup && (

        <div className="sm-popup-overlay">

          <div className="sm-popup-box">

            <h2>Edit Service</h2>

            <input
              type="text"
              value={serviceCategory}
              onChange={(e) =>
                setServiceCategory(e.target.value)
              }
            />

            <input
              type="text"
              value={serviceIcon}
              onChange={(e) =>
                setServiceIcon(e.target.value)
              }
            />

            <div className="sm-popup-buttons">

              <button
                className="sm-save-btn"
                onClick={handleUpdateService}
              >
                Update
              </button>

              <button
                className="sm-cancel-btn"
                onClick={() =>
                  setShowEditPopup(false)
                }
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

      {/* DELETE POPUP */}

      {showDeletePopup && (

        <div className="sm-popup-overlay">

          <div className="sm-popup-box sm-delete-popup">

            <h2>Delete Service</h2>

            <p>

              Are you sure you want to delete

              <b> {selectedService?.category}</b> ?

            </p>

            <div className="sm-popup-buttons">

              <button
                className="sm-delete-confirm-btn"
                onClick={handleDeleteService}
              >
                Delete
              </button>

              <button
                className="sm-cancel-btn"
                onClick={() =>
                  setShowDeletePopup(false)
                }
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

export default ServiceManagement;