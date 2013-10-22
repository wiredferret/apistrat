exports.models = {
  "EventStatus": {"id":"EventStatus","name":"","properties":{"yesCount":{"type":"int","required":false,"description":"Number of people confirmed to attend"},"maybeCount":{"type":"int","required":false,"description":"Number of people who may attend"},"noCount":{"type":"int","required":false,"description":"Number of people who cannot attend"},"invitedCount":{"type":"int","required":false,"description":"Total number of people invited"}}},"Event": {"id":"Event","name":"","properties":{"id":{"type":"int","required":false,"description":"Unique identifier for the event"},"name":{"type":"string","required":false,"description":"Friendly name for the event"},"startDate":{"type":"Date","required":false,"description":"Date & Time that the event begins"},"maxAttendees":{"type":"int","required":false,"description":"number of people who can attend"}}},"Person": {"id":"Person","name":"","properties":{"id":{"type":"int","required":false,"description":"Unique identifier for the person"},"username":{"type":"string","required":false,"description":"Username for the person"},"firstname":{"type":"string","required":false,"description":"First name for the person"},"lastname":{"type":"string","required":false,"description":"Last name for the person"}}}}
