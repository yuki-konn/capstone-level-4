import React from "react";

export function SignOutModal(props) {
  const onSignOut = props.onSignOut;
  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#signOutModal"
      >
        Sign Out
      </button>

      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="signOutModal"
        tabIndex="-1"
        aria-labelledby="signOutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signOutModalLabel">
                Sign Out
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you sure you want to sign out?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button type="submit" className="btn btn-success">
                Yes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );

  // SIGN-OUT MODAL FORM HANDLER
  function handleSubmit(event = new Event()) {
    console.log("Handler: Sign-out Modal");
    event.preventDefault();
    //Position 1 in the array of the target property of Event
    const closeButton = event.target[1];
    // Runs the red "No" button when "Yes" is clicked to close the modal.
    closeButton.click();

    // Changes button to SignInModal
    onSignOut();
  }
}
