package auction.model;

import java.util.List;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class Lot {
    @NotNull
    @Size(min = 8, max = 10)
    private String id;

    private List<Entry> entries;

    public Lot() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<Entry> getEntries() {
        return entries;
    }

    public void setEntries(List<Entry> entries) {
        this.entries = entries;
    }
}
