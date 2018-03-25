package auction.dao;

import auction.model.User;

public interface AuthorizationDAO {
    User logIn(String email, String password);
    User signUp(String name, String description, String email, String password);
    User forgotPassword(String email);
}
