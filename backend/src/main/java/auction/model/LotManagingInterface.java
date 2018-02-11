package auction.model;

import java.util.List;

public interface LotManagingInterface {
    List<Lot> getAllLots();
    Lot createNewLot();
    List<Entry> listLotEntries(String lotId);
    Entry createNewEntry(String lotId, String userId, int price, String comment);
}
