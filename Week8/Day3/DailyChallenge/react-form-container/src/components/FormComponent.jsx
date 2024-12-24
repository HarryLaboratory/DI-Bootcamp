import React from 'react';

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label>Destination:</label>
        <select name="destination" value={formData.destination} onChange={handleChange}>
          <option value="">Select Destination</option>
          <option value="Japan">Japan</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
      </div>

      {/* Dietary Restrictions */}
      <div>
        <label>Nuts Free:</label>
        <input
          type="checkbox"
          name="nutsFree"
          checked={formData.nutsFree}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Lactose Free:</label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Vegan:</label>
        <input
          type="checkbox"
          name="vegan"
          checked={formData.vegan}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>

      {/* Display form data */}
      <div>
        <h3>Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </form>
  );
}

export default FormComponent;

