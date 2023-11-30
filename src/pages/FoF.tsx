import { Alert } from "react-bootstrap";

/**
 * FoF()
 * ====================================
 * Will render 404 error page.
 * 
 * @returns {ReactComponentElement}
 */
export default function FoF() {
    return (
      <Alert variant="danger">
        <h1>Sorry, no page found</h1>
      </Alert>
    );
}