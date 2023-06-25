export default function Contact() {
  return (
    <>
      <div>
        <h1>Contacts</h1>
      </div>
      <div class="container ">
        <div class="row align-items-start">
          <div class="col-8">
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
          <div class="col">Other Network</div>
        </div>
      </div>
    </>
  );
}
