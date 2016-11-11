(function() {var implementors = {};
implementors["amethyst_ecs"] = ["impl IntoRawPtr for Pulse","impl IntoRawPtr for Signal",];implementors["amethyst_context"] = ["impl IntoRawPtr for Pulse","impl IntoRawPtr for Signal",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
