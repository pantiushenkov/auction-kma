package auction.model;

public interface AuthorizationInterface {
    User logIn(String email, String password);
    User signUp(String name, String description, String email, String password);
    User forgotPassword(String email);
}
