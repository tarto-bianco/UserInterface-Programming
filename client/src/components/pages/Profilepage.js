import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    setFormData({ title: '', body: '' }); // Reset after submit
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
        <textarea
          name="body"
          id="body"
          rows={4}
          value={formData.body}
          onChange={handleChange}
          className="mt-1 block w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Post
      </button>
    </form>
  );
};

export default PostForm;
