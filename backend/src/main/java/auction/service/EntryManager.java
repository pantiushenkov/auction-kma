package auction.service;

import auction.model.Entry;

import java.util.List;

public interface EntryManager {

    void createEntry(Entry entry);

    void createEntries(List<Entry> entries);
}
