module QuizLeaderboard {

    use std::vector;
    use std::timestamp;

    // Struct to hold player data
    struct PlayerScore has copy, drop, store {
        player_address: address,
        score: u64,
        timestamp: u64,
    }

    // Resource to hold the leaderboard
    struct Leaderboard has key {
        scores: vector<PlayerScore>,
    }

    // Initialize the module with an empty leaderboard
    public fun init(account: &signer) {
        move_to(account, Leaderboard {
            scores: vector::empty<PlayerScore>(),
        });
    }

    // Function to add a player's score
    public fun add_score(account: &signer, player: address, score: u64) {
        let leaderboard = borrow_global_mut<Leaderboard>(signer::address_of(account));

        // Get the current timestamp
        let current_time = timestamp::now_microseconds();

        // Add the player's score to the leaderboard
        vector::push_back(&mut leaderboard.scores, PlayerScore {
            player_address: player,
            score: score,
            timestamp: current_time,
        });
    }

    // Function to retrieve the leaderboard sorted by scores (descending order)
    public fun get_leaderboard(account: &signer): vector<PlayerScore> {
        let leaderboard = borrow_global<Leaderboard>(signer::address_of(account));

        // Sort the scores using a simple sorting logic
        let mut scores_copy = leaderboard.scores;
        let len = vector::length(&scores_copy);

        let mut i = 0;
        while (i < len) {
            let mut j = i + 1;
            while (j < len) {
                let score_i = vector::borrow_mut(&mut scores_copy, i);
                let score_j = vector::borrow_mut(&mut scores_copy, j);

                if (score_i.score < score_j.score) {
                    // Swap elements
                    let temp = *score_i;
                    *score_i = *score_j;
                    *score_j = temp;
                }
                j = j + 1;
            }
            i = i + 1;
        }

        scores_copy
    }
}