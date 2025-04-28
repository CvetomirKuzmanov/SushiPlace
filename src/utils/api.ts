// Define interfaces for the error result
import { ErrorResult } from "@/types/ErrorResult";
  // Define the API response utility
  export const apiResponse = {
    /**
     * Creates a successful JSON response with the provided data
     * @param data The data to return in the response
     * @param status The HTTP status code (defaults to 200)
     */
    success: <T>(data: T, status = 200): Response => {
      return Response.json(data, { status });
    },
  
    /**
     * Creates an error JSON response with the provided message
     * @param message The error message
     * @param status The HTTP status code (defaults to 400)
     */
    error: (message: string, status = 400): Response => {
      return Response.json({ error: message }, { status });
    },
  
    /**
     * Creates a server error JSON response from an Error object
     * @param error The error object
     */
    serverError: (error: Error): Response => {
      console.error('Server error:', error);
      return Response.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  };
  
  /**
   * Formats an error result into a Response object
   * @param errorResult The error result object containing error message and status code
   */
  export const formatErrorResponse = (errorResult: ErrorResult): Response => {
    return Response.json(
      { error: errorResult.error },
      { status: errorResult.statusCode }
    );
  };