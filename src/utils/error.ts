'use client';

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

interface ErrorResult {
  error: string;
  statusCode: number;
}

// Modified to return a Response object instead of ErrorResult
export const handleError = (error: unknown): Response => {
  let errorResult: ErrorResult;
  
  if (error instanceof AppError) {
    errorResult = {
      error: error.message,
      statusCode: error.statusCode
    };
  } else {
    console.error('Server error:', error);
    errorResult = {
      error: 'Internal server error',
      statusCode: 500
    };
  }
  
  // Return a Response object with the error information
  return new Response(JSON.stringify(errorResult), {
    status: errorResult.statusCode,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};