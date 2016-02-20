var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

var printPerson = function(person) {
    console.log(person.firstName + " " + person.lastName);
    };

    function list() {
    	var contactsLength = contacts.length;
    	for (var i = 0; i < contactsLength; i++) {
    		printPerson(contacts[i]);
    	}
    }

    var search = function(lastName)
    {
        var contactsLength = contacts.length;
        for(var i=0; i< contactsLength ; i++)
        {
            if(contacts[i].lastName === lastName)
            {
                printPerson(contacts[i]);
            }
            else
            {
                "something went wrong";
            };
        };
    }

    search("Jones");

    var add = function(firstName, lastName, email, phoneNumber) { //create function as asked
    contacts[contacts.length] = { //create a new object, use its future index as a name (last position of the array)
    firstName: firstName, // assign parameters to properties
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber
    }
    };

    add("John", "Smith", "johnsmith@zmail.com", "555-555-5555"); //call add function, pass new contact info
    list(contacts); //check, as they request, to see if your new friend made the list!
