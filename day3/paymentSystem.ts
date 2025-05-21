// Example 2: Polymorphism with Interfaces (Payment System)
// Scenario: Model different payment methods (Credit Card, PayPal, Crypto) that process payments.

// Insight: The checkout function doesn’t care about the specific
// payment type—it only needs a PaymentMethod. This is a powerful way to write generic, reusable code.

interface PaymentMethod {
  processPayment(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`processing credit card payment of $${amount}`);
  }
}

class CryptoPayment implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`processing crypto payment of $${amount}`);
  }
}

function checkout(payment: PaymentMethod, amount: number): void {
  console.log("Initiating payment");
  payment.processPayment(amount);
  console.log("checkout complete");
}

const crypto = new CryptoPayment();
const credit = new CreditCardPayment();

checkout(crypto, 10000);
checkout(credit, 2000);
