# Why use ngSubmit over button (click) event
ngSubmit is part of the angular life cicle, bypassing its use via a button with the "(click)" event listener, holds us back on some nifty features.

### It:
- Ensures that the form doesn't submit when the handler code throws and causes an actual http post request".
- Triggers when clicking the Enter key while being focused on any input element within the form out of the box
- Marks the instance of the appropiate FormGroupDirective as submitted when the event has been triggered

## Flow
### 1. The html submit event fires
  The onSubmit event fires in the \<form\> when:
    - the user clicks a button inside the form
    - the user clicks an input tag with type="buton" inside the form
    - the user presses Enter while editing a field (e.g., \<input type="text"\>) in a form,
    - a script calls the form.requestSubmit() method

  [From Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)

### 2. The ngFormDirective handles the event
  [The ngFormDirective is host binded to the form event](https://github.com/angular/angular/blob/4.3.4/packages/forms/src/directives/ng_form.ts#L62)
  It catches the onSubmit event [prevents default behaviour by returning false](https://github.com/angular/angular/blob/4.3.4/packages/forms/src/directives/ng_form.ts#L140-L144) and emits a custom ngSubmit event.

### 3. The AbstractControl class updates
[AbstractControl](https://angular.dev/api/forms/AbstractControl) is the base class for FormControl, FormGroup, and FormArray.
It watches for the lifecicle hook FormHook's change, blur and **submit** updates.

## Source
[Why it’s crucial to use a button of submit type](https://medium.com/javascript-everyday/form-submission-why-its-crucial-to-use-a-button-of-submit-type-b43511d92671) by
Wojciech Trawiński
