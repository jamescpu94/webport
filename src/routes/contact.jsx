import PageTitle from "../components/page-title";

export default function Contact() {
  return (
    <>
      <PageTitle title="Contact" />
      <div class="container">
        <div class="row">
          <div class="col-8">
            <h2>Get in touch</h2>
            <div class="mb-3">
              <label for="inputName" class="form-label">
                Your Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="James Udani"
              />
            </div>
            <div class="mb-3">
              <label for="emailAdd" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="emailAdd"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="phoneNum" class="form-label">
                Phone (Optional)
              </label>
              <input
                type="tel"
                class="form-control"
                id="phoneNum"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">
                Your Message
              </label>
              <textarea class="form-control" id="message" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </div>
          <div class="col">
            <h1>Others</h1>
            <div>
              <i class="fa-brands fa-linkedin fa-2x"></i>
              <i class="fa-brands fa-square-github fa-2x"></i>
              <i class="fa-brands fa-square-instagram fa-2x"></i>
              <i class="fa-solid fa-envelope fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
