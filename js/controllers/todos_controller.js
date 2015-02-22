Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the new todo title from the "New Todo" text box
      var title= this.get('newTitle');
      if (!title.trim()) {return; }
      
      //Create new todo Model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      //Clear the "New Todo" text box
      this.set('newTitle', '');

      //Save the new model
      todo.save();
    }
  },
  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining')
});
