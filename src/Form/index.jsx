function Form({ id, title, placeholder, handleChange }) {
  return (
    <form action="" className=" ">
      <label
        htmlFor="bill"
        id="{id}"
        className="text-sm tracking-wider font-medium"
      >
        {title}
      </label>
      <div className="w-full mt-1">
        <input
          type="text"
          name=""
          id="bill"
          placeholder={placeholder}
          className="bg-blue-50 py-2 px-2 rounded-md w-full border-2 border-blue-50 hover:border-gray-400"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default Form;
