import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import List "mo:base/List";

actor {
    type List<T> = ?(T, List<T>);
    
    type User = {
        userId: Principal;
        email: Text;
        fullName: Text;
        profilePic: Text;
    };

    type Agreement = {
        agreementId: Principal;
        parties: List<Principal>;
        title: Text;
        description: Text;
        status:Text
    };

    var users = HashMap.HashMap<Principal, User>(10, Principal.equal, Principal.hash);
    var agreements = HashMap.HashMap<Principal, Agreement>(10, Principal.equal, Principal.hash);

  public shared(msg) func register(user: User): async Text {
    let caller : Principal = msg.caller;
    switch (users.get(caller)) {
        case null {
            users.put(caller, user);
            return "User registered successfully!";
        };
        case (?_) {
            return "Error: User already exists!";
        };
    };
};

    public query func getUser(userId: Principal): async ?User {
        return users.get(userId);
    };

    public func updateUser(userId: Principal, user: User): async Text {
        users.put(userId, user);
        return "User updated successfully!";
    };

    public func createAgreement(agreement: Agreement): async Text {
        agreements.put(agreement.agreementId, agreement);
        return "Agreement created successfully!";
    };

    public query func getAgreement(agreementId: Principal): async ?Agreement {
        return agreements.get(agreementId);
    };

    public func updateAgreement(agreementId: Principal, agreement: Agreement): async Text {
        agreements.put(agreementId, agreement);
        return "Agreement updated successfully!";
    };
}
