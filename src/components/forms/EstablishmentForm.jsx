import { HeadingTwo } from "../layout/Headings";
import { useForm } from "react-hook-form";
import { Button } from "../common/Buttons";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  // Validation
  const accommodationName = document.querySelector(".accommodationName");
  const keyFeatures = document.querySelector(".keyFeatures");
  const description = document.querySelector(".description");
  const price = document.querySelector(".price");
  const image = document.querySelector(".image");
  const location = document.querySelector(".location");

  const formInputs = document.querySelectorAll("input, textarea");
  setTimeout(function () {
    formInputs.forEach(() => {
      if (errors.accommodationName) {
        accommodationName.classList.add("input-error");
        accommodationName.classList.add("input-error-still-icon");
      } else {
        accommodationName.classList.remove("input-error");
        accommodationName.classList.remove("input-error-still-icon");
      }

      if (errors.keyFeatures) {
        keyFeatures.classList.add("input-error");
        keyFeatures.classList.add("input-error-still-icon");
      } else {
        keyFeatures.classList.remove("input-error");
        keyFeatures.classList.remove("input-error-still-icon");
      }

      if (errors.description) {
        description.classList.add("input-error");
        description.classList.add("input-error-still-icon");
      } else {
        description.classList.remove("input-error");
        description.classList.remove("input-error-still-icon");
      }

      if (errors.price) {
        price.classList.add("input-error");
        price.classList.add("input-error-still-icon");
      } else {
        price.classList.remove("input-error");
        price.classList.remove("input-error-still-icon");
      }

      if (errors.image) {
        image.classList.add("input-error");
        image.classList.add("input-error-still-icon");
      } else {
        image.classList.remove("input-error");
        image.classList.remove("input-error-still-icon");
      }

      if (errors.location) {
        location.classList.add("input-error");
        location.classList.add("input-error-still-icon");
      } else {
        location.classList.remove("input-error");
        location.classList.remove("input-error-still-icon");
      }
    });
  }, 100);

  return (
    <section id="establish-form">
      <HeadingTwo title="Create an establishment" />
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form establish-form">
        <div>
          {errors.accommodationName && <span>Accommodation name is required</span>}
          <input type="text" placeholder="Accommodation Name" className="accommodationName" {...register("accommodationName", { required: true, max: 20, min: 5, maxLength: 80 })} />

          {errors.keyFeatures && <span>Add key features</span>}
          <input type="text" placeholder="Key features" className="keyFeatures" {...register("keyFeatures", { required: true, max: 20, min: 5, maxLength: 100 })} />

          {errors.description && <span>Description is required</span>}
          <textarea placeholder="Description" className="description" {...register("description", { required: true, max: 100, min: 20 })} />
        </div>
        <div>
          {errors.price && <span>Price is required</span>}
          <input type="number" placeholder="Price" className="price" {...register("price", { required: true, maxLength: 12 })} />

          {errors.location && <span>Location is required</span>}
          <input type="text" placeholder="Location" className="location" {...register("location", { required: true, max: 60, min: 1 })} />

          <label htmlFor="image">Image</label>
          {errors.image && <span>A URL image is required</span>}
          <input type="file" className="image" {...register("image", { required: true })} />
          <div>
            <input type="range" placeholder="Rating" {...register("Rating", {})} />

            <div className="contact-form-button">
              <Button btnClass="cta" btnText="Create" />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
