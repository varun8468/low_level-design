//Example 3: Polymorphism with Abstract Classes (Notification System)
// Scenario: Build a notification system (Email, SMS, Push) using an abstract class.

abstract class Notification {
  protected recipient: string;
  constructor(recipient: string) {
    this.recipient = recipient;
  }

  abstract send(message: string): void;

  logNotification(message: string): void {
    console.log(`Notification logged for ${this.recipient}: ${message}`);
  }
}

class EmailNotification extends Notification {
  override send(message: string): void {
    console.log(`Email sent to ${this.recipient}: ${message}`);
    this.logNotification(message);
  }
}

class SMSNotification extends Notification {
  send(message: string): void {
    console.log(`SMS sent to ${this.recipient}: ${message}`);
    this.logNotification(message);
  }
}

const notification: Notification = new EmailNotification("vpsmacker@gmail.com")

notification.send("Hello, I am writing mail to myself")

const smsnotification: Notification = new SMSNotification("7745858200")
smsnotification.send("I am sending SMS to myself")


// Abstract Class: Notification defines an abstract method send (must be implemented by subclasses) and a concrete method logNotification (shared by all subclasses).
// Subclasses: EmailNotification, SMSNotification, and PushNotification implement send differently but inherit logNotification.
// Polymorphism: The notifications array is typed as Notification[]. Calling send invokes the subclass-specific implementation, and logNotification adds shared behavior.
// Advantage: Abstract classes allow you to mix shared logic (logNotification) with polymorphic behavior (send).



// Variation: Let’s simulate a notification retry system:

