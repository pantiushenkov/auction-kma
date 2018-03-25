package auction.dao;

import auction.model.Entry;
import auction.model.Lot;

import java.util.List;

public interface EntryDAO {
    // add these back and ? rename it back to LotManagingDAO
//    List<Lot> getAllLots();
//    Lot createNewLot();
//    List<Entry> listLotEntries(String lotId);
    void createNewEntry(Entry entry);
}
