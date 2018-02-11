package auction.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class Auction {
    @NotNull
    @Size(min = 8, max = 10)
    private String id;

    @NotNull
    @Size(min = 3, max = 50)
    private String name;

    @NotNull
    @Size(min = 40, max = 1000)
    private String description;

    public Auction() {
    }

    public Auction(String name, String description) {
        this.name = name;
        this.description = description;
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
}
