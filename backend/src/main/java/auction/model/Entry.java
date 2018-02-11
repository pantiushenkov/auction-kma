package auction.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Min;

public class Entry {
    @NotNull
    @Size(min = 8, max = 10)
    private String lotId; // on which lot the entry was made

    @NotNull
    @Size(min = 8, max = 10)
    private String userId; // who did the entry

    @NotNull
    @Min(value = 0)
    private int price; // in uah

    private String comment; // user's comment on the entry

    public Entry() {

    }

    public Entry(String lotId, String userId, int price, String comment) {
        this.lotId = lotId;
        this.userId = userId;
        this.price = price;
        this.comment = comment;
    }

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
