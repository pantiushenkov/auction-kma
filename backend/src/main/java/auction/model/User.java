package auction.model;

import java.util.List;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Pattern;

public class User {

    @NotNull
    @Size(min = 8, max = 10)
    private String id;

    @NotNull
    @Size(min = 3, max = 50)
    private String name; // TODO (?) maybe split to first and last name

    @Size(max = 400)
    private String description; // description, which will be shown on own lot and (?) on profile

    private List<Entry> entries;

    private Lot myLot; // this user as a lot on auction

    private boolean isAdmin; // is this user an admin

    // @Size(min = 8, max = 20)
    // private String username; // TODO is it necessary?

    @NotNull
    @Size(min = 5, max = 50)
    @Pattern(regexp = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    private String email;

    @NotNull
    @Size(min = 7, max = 16)
    private String password; // TODO should be hashed version instead

    // private String photo; // TODO think how do we wanna store them

    public User() {
    }

    public User(String name, String description, String email, String password) {
        this.name = name;
        this.description = description;
        this.email = email;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Entry> getEntries() {
        return entries;
    }

    public void setEntries(List<Entry> entries) {
        this.entries = entries;
    }

    public Lot getMyLot() {
        return myLot;
    }

    public void setMyLot(Lot myLot) {
        this.myLot = myLot;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
